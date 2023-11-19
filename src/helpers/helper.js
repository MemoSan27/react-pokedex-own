export const getBackground = (index = 0, infoPoke) => {
    let type = infoPoke?.types?.[index].type.name;
    switch (type) {
        case "normal":
            return "#b19176"
            break;
        case "fighting":
            return "#c03636"
            break;
        case "flying":
            return "#568aa8"
            break;
        case "poison":
            return "#964bc2"
            break;
        case "ground":
            return "#722f03"
            break;
        case "rock":
            return "#81404b"
            break;
        case "bug":
            return "#0fccb3"
            break;
        case "ghost":
            return "#cd40f8"
            break;
        case "steel":
            return "#d6d3d3"
            break;
        case "fire":
            return "#F8B78B"
            break;
        case "water":
            return "#2697f3"
            break;
        case "grass":
            return "greenyellow"
            break;
        case "electric":
            return "#caaf36"
            break;
        case "psychic":
            return "#fa7e93"
            break;
        case "ice":
            return "#b9e3f3"
            break;
        case "dragon":
            return "#fa4801"
            break;
        case "dark":
            return "gray"
            break;
        case "fairy":
            return "pink"
            break
    }
}

export const getColor = (index = 0, infoPoke) => {
    let type = infoPoke?.types?.[index].type.name;
    switch (type) {
        case "normal":
            return "rgb(255,255,255)"
            break;
        case "fighting":
            return "rgb(255,255,255)"
            break;
        case "flying":
            return "rgb(255,255,255)"
            break;
        case "poison":
            return "rgb(255,255,255)"
            break;
        case "ground":
            return "rgb(255,255,255)"
            break;
        case "rock":
            return "rgb(255,255,255)"
            break;
        case "bug":
            return "rgb(255,255,255)"
            break;
        case "ghost":
            return "rgb(255,255,255)"
            break;
        case "steel":
            return "rgb(0,0,0)"
            break;
        case "fire":
            return "rgb(255,255,255)"
            break;
        case "water":
            return "rgb(255,255,255)"
            break;
        case "grass":
            return "rgb(105,105,105)"
            break;
        case "electric":
            return "rgb(255,255,255)"
            break;
        case "psychic":
            return "rgb(255,255,255)"
            break;
        case "ice":
            return "rgb(0,0,0)"
            break;
        case "dragon":
            return "rgb(255,255,255)"
            break;
        case "dark":
            return "rgb(255,255,255)"
            break;
        case "fairy":
            return "rgb(0,0,0)"
            break
    }
  }