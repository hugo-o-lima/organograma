import './TextEnter.css';

const TextEnter = (props) => {
    return (
        <div className="text-enter">
            <label>{props.label}</label>
            <input id='Nome' placeholder={`${props.placeholder}...`} type="text"/>
        </div>
    );
};

export default TextEnter;