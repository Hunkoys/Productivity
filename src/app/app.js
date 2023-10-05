import el from "../utils/element";

export default el(`div`, `container`, [
    el(`div`, `row bg-primary`, [
        el(`span`, `col-4 border`, `Hello`),
        el(`span`, `col-8`, `There`)
    ])
]);
