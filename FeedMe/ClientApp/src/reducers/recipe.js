const mockData = [
    { name: "test", content: "Some quick example text", url: "https://w.wallhaven.cc/full/43/wallhaven-43zpw6.jpg" },
    { name: "test2", content: "Some quick example text", url: "https://w.wallhaven.cc/full/4l/wallhaven-4l36wr.jpg" },
    { name: "test", content: "Some quick example text", url: "https://w.wallhaven.cc/full/42/wallhaven-427d16.jpg" },
    { name: "test2", content: "Some quick example text", url: "https://w.wallhaven.cc/full/42/wallhaven-427d16.jpg" },
    { name: "test", content: "Some quick example text", url: "https://w.wallhaven.cc/full/nz/wallhaven-nz8wog.jpg" },
    { name: "test2", content: "Some quick example text", url: "https://w.wallhaven.cc/full/43/wallhaven-43zpw6.jpg" },
    { name: "test", content: "Some quick example text", url: "https://w.wallhaven.cc/full/4l/wallhaven-4l36wr.jpg" },
    { name: "test2", content: "Some quick example text", url: "https://w.wallhaven.cc/full/42/wallhaven-427d16.jpg" },
    { name: "test", content: "Some quick example text", url: "https://w.wallhaven.cc/full/42/wallhaven-427d16.jpg" },
    { name: "test2", content: "Some quick example text", url: "https://w.wallhaven.cc/full/nz/wallhaven-nz8wog.jpg" },
    { name: "test", content: "Some quick example text", url: "https://w.wallhaven.cc/full/4l/wallhaven-4l36wr.jpg" },
    { name: "test2", content: "Some quick example text", url: "https://w.wallhaven.cc/full/42/wallhaven-427d16.jpg" },
    { name: "test", content: "Some quick example text", url: "https://w.wallhaven.cc/full/42/wallhaven-427d16.jpg" },
    { name: "test2", content: "Some quick example text", url: "https://w.wallhaven.cc/full/nz/wallhaven-nz8wog.jpg" }
];

const recipeReducer = (state = mockData, action) => {
    switch (action.type) {
        case 'ADDRECIPES':
            return state.push(action.payload);
        case 'GETRECIPES':
            return state.push(action.payload);
        case 'DELETERECIPES':
            return state.pop(action.payload);
        default:
            return state;
    }
}

export default recipeReducer;