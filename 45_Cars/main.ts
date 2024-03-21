type car = {
    manufacture:string
    model:string
    [hey: string]: any
}

function createCar(manufacture: string, model: string, optional: Record< string, any>): car {
    return{
        manufacture,
        model,
        ...optional
    }
}

const myCar: car = createCar("Toyota", "corolla", {color: "silver", year : "2024"})
console.log(myCar)