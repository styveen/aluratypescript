const controller = new NegociaoController();

//JQUERY
$('.form').submit(controller.adiciona.bind(controller));
/*
document
    .querySelector('.form')
    .addEventListener('submit', controller.adiciona.bind(controller));
*/


