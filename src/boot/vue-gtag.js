import VueGtag from "vue-gtag";

export default ({ app, router }) => {
    app.use(VueGtag, {
        config: {
            id: "G-HZEY0HZNQW",
        }
    }, router);
}
