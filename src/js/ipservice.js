import shortid from 'shortid';



const asd = () => {
    console.log(asd)
}
const asd2 = id => {
    console.log(asd)
}
const asd3 = id => {
    console.log(asd)
}

export default { asd, asd2, asd3 }


export const addUser = name => {
    const user = {
        id: shortid.generate(),
        name
    }
    console.log(user)
}