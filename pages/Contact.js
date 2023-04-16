import React from 'react'

const Conatct = () => {
  return (
    
  <div>
    <link rel="stylesheet" href="style.css" />
    <link
      rel="stylesheet"
      href="https://bootswatch.com/5/sandstone/bootstrap.min.css"
    />
  

    <div class="container">
      <div class="row">
        <div class="col-5">
          <h1 class="mb-5">Contact Us</h1>
          <form
            action=""
            method="POST"
          >
            <div class="mb-3">
              <label class="form-label">Full Name</label>
              <input name="name" type="text" class="form-control" required />
            </div>

            <div class="mb-3">
              <label class="form-label">Email address</label>
              <input name="email" type="email" class="form-control" required />
              <div id="emailHelp" class="form-text">
                Don't worry, we won't share it with anyone else.
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label">Phone (optional)</label>
              <input name="phone" type="tel" class="form-control" />
              <div id="phoneHelp" class="form-text">
                If you rather talk to a human directly.
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label">Your Message</label>
              <textarea
                name="message"
                class="form-control"
                rows="3"
                required
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>

        <div class="col-1"></div>

        <div class="col-6 position-relative">
          <img
            src="mail.svg"
            class="w-75 position-absolute top-50 start-50 translate-middle"
          />
        </div>
      </div>
   

    
 
    </div>
    </div>
  )
}

export default Conatct


