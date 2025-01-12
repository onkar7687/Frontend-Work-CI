

import React from 'react'

const forms = () => {
    return (
        <div>
            <form>
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" />
                </div>
                <div class="mb-3">
                    <label for="comments" class="form-label">comments</label>
                    <input type="text" class="form-control" id="comments" />
                </div>
                <div class="mb-3">
                    <label for="status" class="form-label">status</label>
                    <input type="text" class="form-label" />
                
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default forms
