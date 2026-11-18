 const _promise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise resolved");
        }, 2000);
    });
}
const res = _promise();

res.then((data) => {
    console.log(data);
}).catch((error) => {
    console.error(error);
});
