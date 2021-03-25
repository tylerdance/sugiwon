function Contact () {
    return (
        <div>
            <div id="contact-form">
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="input-email" aria-describedby="emailHelp" />
                    </div>
                    <div>
                        <label for="input-message">Messsge</label>
                        <input id="message-body" type="text" class="form-control"></input>
                    </div>
                    <br />
                    <button>Send</button>
                </form>

            </div>
    
        </div>
    )
}

export default Contact;