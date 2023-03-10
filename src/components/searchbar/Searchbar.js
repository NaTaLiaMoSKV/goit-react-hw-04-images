import { useState } from "react";

export default function Searchbar({ onSearchbarSumbit }) {
    const [imageName, setImageName] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if (imageName.trim() === '') return;
        onSearchbarSumbit(imageName);
    }

    const handleInput = (evt) => {
        setImageName(evt.currentTarget.value);
    }
     return (
        <header className="searchbar">
            <form className="searchForm" onSubmit={handleSubmit}>
                <button type="submit" className="searchForm-button">
                <span className="searchForm-button-label">Search</span>
                </button>

                <input
                    className="searchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={handleInput}
                />
            </form>
        </header>
    )
}


// class Searchbar extends Component {
//     state = {
//         imageName: '',
//     }

//     handleSubmit = (evt) => {
//         evt.preventDefault();

//         if (this.state.imageName.trim() === '') return;
//         this.props.onSubmit(this.state.imageName);
//     }

//     handleInput = (evt) => {
//         this.setState({ imageName: evt.currentTarget.value });
//     }

//     render() {
//         return (
//             <header className="searchbar">
//                 <form className="searchForm" onSubmit={this.handleSubmit}>
//                     <button type="submit" className="searchForm-button">
//                     <span className="searchForm-button-label">Search</span>
//                     </button>

//                     <input
//                         className="searchForm-input"
//                         type="text"
//                         autoComplete="off"
//                         autoFocus
//                         placeholder="Search images and photos"
//                         onChange={this.handleInput}
//                     />
//                 </form>
//             </header>
//         )
//     }
// }

// export default Searchbar;