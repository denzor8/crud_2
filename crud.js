// Создать полноценный CRUD для продуктов, а также реализовать поиск и сортировку по цене, у каждого продукта должны быть след. данные: название, страна производитель, кол-во на складе, цвет, цена, id(всегда должно быть уникальным), по итогу должно получиться 7 функций(создание, удаление, редактирование, получение продуктов; функция для поиска по названию и для поиска продуктов по диапазону цен; менеджер, который все это будет запускать)

let db = [];
function createProduct() {
	let data = prompt('Enter title, country, count,color, price with space').split(' ');
	let newProduct = {
		id: Date.now(),
		title: data[0],
		country: data[1],
		count: data[2],
		color: data[3],
		price: data[4],
	};
	db.push(newProduct);
	console.log(db);
	manager();
}

function readProduct() {
	for (i of db) {
		console.log(i);
	}
	manager();
}

function updateProduct() {
	let productId = +prompt('Enter product id');
	for (i of db) {
		if (i.id === productId) {
			let word = prompt('Enter key-value with space').split(' ');
			i[word[0]] = word[1];
			console.log(db);
			break;
		}
	}
	manager();
}

function deleteProduct() {
	let productId = +prompt('Enter product id');
	for (i of db) {
		if (i.id === productId) {
			db.splice(0, i);
			console.log(db);
			break;
		}
	}
	manager();
}

function searchProduct() {
	let searchProduct = prompt('Enter search product');
	for (i of db) {
		if (i.tittle === searchProduct) {
			console.log(i);
		}
	}
}

function searchProductByPrice() {
	let searchProductPrice = +prompt('Enter search product price');
	for (i of db) {
		if (i.price === searchProductPrice) {
			console.log(i);
		}
	}
}

function manager() {
	let data = prompt('Chose operation: Create(c),read(r),update(u), delete(d),serach product by tittle(st), search product by price(sp),exit(e)').toLowerCase();
	switch (data) {
		case 'c':
			createProduct();
			break;
		case 'r':
			readProduct();
			break;
		case 'u':
			updateProduct();
			break;
		case 'd':
			deleteProduct();
			break;
		case 'st':
			searchProduct();
			break;
		case 'sp':
			searchProductByPrice();
			break;
		case 'e':
			createProduct();
			break;
		default:
			return;
	}
}
manager();

// title country count color price
