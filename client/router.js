Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/principal', {
    name: 'principal'
});
Router.route('/paguei', {
    name: 'paguei'
});
Router.route('/recebi', {
    name: 'recebi'
});
Router.route('/', {
    name: 'apresentac'
});
Router.route('/login', {
    name: 'login'
});
Router.route('/conta+cartao', {
    name: 'contaCartao'
});
