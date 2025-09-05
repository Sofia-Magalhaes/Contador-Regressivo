import { useContext, useState } from 'react'

import { CountdownContext, CountdownProvider } from '../context/CountDownContext';

import { useNavigate } from 'react-router-dom';

import './Home.css'

const Home = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('')
    const [image, setImage] = useState('')
    const [colour, setColour] = useState('')


    const [imageBase64, setImageBase64] = useState(null);

    const { setEvent } = useContext(CountdownContext)

    const navigate = useNavigate()

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setImageBase64(reader.result);
            };
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // O objeto do evento agora usa `imageBase64` em vez de uma URL
        const eventObject = {
            title,
            date,
            image: imageBase64, // AQUI está a grande mudança!
            colour,
        };

        // Guarda o objeto do evento no estado (ou contexto)
        // A página "/countdown" irá ler este objeto para exibir os dados.
        setEvent(eventObject);
        console.log("Objeto do evento a ser enviado:", eventObject);

        navigate("/countdown");
    };


    return (
        <div className='home'>
            <h2>Monte a sua contagem regressiva</h2>
            <form className='countdown-form' onSubmit={handleSubmit}>
                <label>
                    <span>Título: </span>
                    <input
                        type="text"
                        name="title"
                        placeholder='Digite o título do evento'
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>
                <label>
                    <span>Data do evento: </span>
                    <input
                        type="date"
                        name="date"
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </label>
                <label>
                    <label htmlFor="image-upload" style={{ cursor: 'pointer' }}>
                        <span>Imagem (do seu computador):</span>
                    </label>
                    <input
                        id="image-upload"
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    {imageBase64 && (
                        <img src={imageBase64} alt="Pré-visualização" style={{ maxWidth: '100%', borderRadius: '8px', marginTop: '10px', border: '1px solid #ddd' }} />
                    )}
                </label>
                <label>
                    <span>Cor do tema: </span>
                    <input
                        type="color"
                        name="color"
                        onChange={(e) => setColour(e.target.value)}
                        required
                    />
                </label>
                <input
                    type="submit"
                    value="Enviar"
                />
            </form>
        </div>
    )
}

export default Home