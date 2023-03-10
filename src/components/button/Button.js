export default function Button({ onButtonClick }) {
    return (
        <div>
            <button className="button" onClick={onButtonClick}>Load more</button>
        </div>
    );
}