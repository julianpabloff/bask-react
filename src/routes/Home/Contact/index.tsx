import './style.css';

function ContactInfo() {
    return (
        <div className="flex column half">
            <h2>Contact Us</h2>
            <p>Fill out your info here to get a quote on any type of work or if you have any questions.</p>
            <p>Email: <a href="mailto:johnw@baskbikes.com" target="_blank">JohnW@BaskBikes.com</a></p>
            <p>Instagram: <a href="https://www.instagram.com/baskbikes/" target="_blank">@BaskBikes</a></p>
        </div>
    );
}

interface TextInputProps {
    name: string; // for the formData
    label: string; // label above the input
    big?: boolean; // spans the whole width of the form
    textarea?: boolean; // make it a textarea
    required?: boolean; // is it required?
}

function TextInput({ name, label, big, textarea, required }: TextInputProps) {
    return (
        <div className={`flex column ${big ? "span2" : ""}`}>
            <label htmlFor={name}>
                {label}
                {required ? <span> (required)</span> : ""}
            </label>
            {textarea
                ? <textarea name={name} required={required} />
                : <input name={name} type="text" required={required} />
            }
        </div>
    );
}

function Form() {
    function handleSubmit(formData: FormData): void {
        console.log('firstname:', formData.get('firstname'));
    }

    return (
        <form action={handleSubmit} className="half">
            <TextInput name="firstname" label="First Name" />
            <TextInput name="lastname" label="Last Name" />
            <TextInput name="email" label="Email" big />
            <TextInput name="message" label="Message" big textarea />
            <button type="submit">Send It</button>
        </form>
    );
}

export default function Contact() {
    return (
        <section className="contact max-w-container">
            <div className="max-w">
                <ContactInfo />
                <Form />
            </div>
        </section>
    );
}
