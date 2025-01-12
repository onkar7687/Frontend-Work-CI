import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AxiosInstance from './Axios'; // Import the axios instance

const Home = () => {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from the API
  const fetchData = async () => {
    try {
      const response = await AxiosInstance.get('/questionnaires/');
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  // Delete item from the API
  const handleDelete = async (id) => {
    if (window.confirm(t('confirm_delete'))) {
      try {
        await AxiosInstance.delete(`/questionnaire/delete/${id}/`);
        fetchData();
        alert(t('delete_success'));
      } catch (error) {
        console.error('Error deleting item:', error);
        alert(t('delete_error'));
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Change language function
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="container mt-5">
      <div>
        {/* Language Switcher */}
        <div className="language-switcher">
          <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('fr')}>French</button>
          <button onClick={() => changeLanguage('hi')}>Hindi</button>
        </div>
      </div>

      {/* Page Header */}
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>

      {/* Data Table */}
      <h2>{t('questionnaire_table')}</h2>
      {loading ? (
        <p>{t('loading')}</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>{t('name')}</th>
              <th>{t('start_date')}</th>
              <th>{t('end_date')}</th>
              <th>{t('comments')}</th>
              <th>{t('status')}</th>
              <th>{t('created')}</th>
              <th>{t('action')}</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item._id || index}>
                <td>{index + 1}</td>
                <td>{item.name || t('not_available')}</td>
                <td>{item.start_date || t('not_available')}</td>
                <td>{item.end_date || t('not_available')}</td>
                <td>{item.comments || t('no_comments')}</td>
                <td>{item.status || t('no_status')}</td>
                <td>
                  {item.created
                    ? new Date(item.created).toLocaleDateString()
                    : t('not_available')}
                </td>
                <td>
                  <button onClick={() => handleDelete(item._id)}>{t('delete')}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
