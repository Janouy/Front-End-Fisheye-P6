

function photographerFactory(data, type) {
    if(type === 'mainPage'){
        return new Photographers(data);
    }else if(type === 'photographerPage'){
        return new Photographer(data)
    }
}

