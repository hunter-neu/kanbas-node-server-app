const module = {
    id: 123,
    name: "My Module",
    description: "My first module",
    course: "CS4550"
}
export default function Module(app) {
    app.get("/lab5/module", (req, res) => {
        res.json(module);
    })
    app.get("/lab5/module/name", (req, res) => {
        res.json(module.name);
    })
}