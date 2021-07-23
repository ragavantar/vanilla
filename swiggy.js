const body = document.getElementById('root');

const getRestaurantCardElement = (val) => {
    const { name }= val;
    const ele = document.createElement('div');
    ele.innerHTML = `
        <h1>${name}</h1>
    `
    return ele;
}

const names = ['hello', 'world'];

names.forEach(name => body.appendChild(getRestaurantCardElement({name})));
