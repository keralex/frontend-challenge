const https = require('https');

const apiURLS = {
  search: 'https://api.mercadolibre.com/sites/MLA/search?q=',
  itemDetail: 'https://api.mercadolibre.com/items/',
};

exports.getProductsList = query => {
  return search(query).then(response => {
    const categories = filterCategories(response.filters);
    const items = filterItems(response.results);
    return {
      categories,
      items,
    };
  });
};

function filterCategories(filters) {
  return filters.length && filters[0].values
    ? filters[0].values[0].path_from_root.map(elem => elem.name)
    : [];
}

function filterItems(results) {
  return results.map(item => {
    const [amount, decimals] = item.price.toString().split('.');
    return {
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: parseInt(amount),
        decimals: parseInt(decimals),
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
    };
  });
}

exports.getProductDetail = query => {
  return itemDetail(query).then(responses => {
    const [item, description] = responses;
    const [amount, decimals] = item.price.toString().split('.');
    return {
      item: {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: parseInt(amount),
          decimals: parseInt(decimals),
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        sold_quantity: item.sold_quantity,
        description: description.plain_text,
      },
    };
  });
};

//#Request
const search = query => {
  console.log(`${apiURLS.search}${query}`);
  return request(`${apiURLS.search}${query}`);
};

const itemDetail = query => {
  return Promise.all([
    request(`${apiURLS.itemDetail}${query}`),
    request(`${apiURLS.itemDetail}${query}/description`),
  ]);
};

let request = url => {
  return new Promise((resolve, reject) => {
    let body = '';
    https
      .get(url, response => {
        response.on('data', chunk => {
          body += chunk;
        });
        response.on('end', () => {
          resolve(JSON.parse(body));
        });
      })
      .on('error', e => reject(e));
  });
};