import { Send } from "@material-ui/icons";
import emailjs from 'emailjs-com';

const Mailer = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_66kzour','template_oxbwpid',e.target, '_idouojzDLgSPWuXj').then(res=> {
            console.log(res)
        }).catch(err=> console.log(err));
    }
    return ( 
        <div>
            <h1>Write Me An Email</h1>
            <form onSubmit={sendEmail}>
                <label>name</label>
                <input type="text" name="name"/>

                <label>Email</label>
                <input type="email" name="user_email"/>

                <label>Message</label>
                <textarea name="message" rows={4}/>
                <input type="submit" value={Send}/>

            </form>
        </div>
    );
}

export default Mailer;