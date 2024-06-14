import juanOne from './JuanOne.mp3'
import santoor from './SantoorBansuriDuet.mp3'
import forest_img from './forest-img.jpg'
import forest_lullaby from './forest-lullaby.mp3'

export const tracks = [
    {
        artist: "chethan",
        tracks: 
        [{
            title: 'Santoor Bansuri Duet',
            src: santoor,
            artist: 'Chethan Anant and Rupak',
            image: forest_img
        }, 
        {
            title: 'Forest Lullaby',
            src: forest_lullaby,
            artist: 'Unknown Artist',
            image: forest_img
        }]
    }, {
        artist: "juan",
        tracks: 
        [{
            title: 'Juan Mix #1',
            src: juanOne,
            artist: 'Juan Pastor',
            image: forest_img
        }, 
        {
            title: 'HEHE Lullaby',
            src: forest_lullaby,
            artist: 'Unknown Artist',
            image: forest_img
        }]
    }
]