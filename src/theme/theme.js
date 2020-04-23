import {createMuiTheme} from "@material-ui/core/styles";
const theme = createMuiTheme({
    orange: {
        light: '#FFD8B8',
        dark: '#FFCDA3',
        darker: '#FFBE87',
        darkest: '#DE9D66'
    },
    green: {
        light: '#BEC9B7',
        dark: '#728567',
        darker: '#3B4C32',
        darkest: '#273620'
    },
    blue: {
        light: '#808DA6',
        dark: '#51617D',
        darker: '#35435D',
        darkest: '#27334A'
    },
    pale: '#F2F1E6',
    greenyellow: {
        light: '#E3DEAC',
        dark: '#D4CE96',
        darker: '#C2BC84',
        darkest: '#999462'
    },
    font: "'Poppins', sans-serif;",
    button: {
        radius: 40
    }
});
export default theme;