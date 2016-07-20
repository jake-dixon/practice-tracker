Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/cars/create', {
	name: 'createCar',
	controller: "CarsController",
	action: 'create',
	where: 'client'
});

Router.route('/cars', {
  name: 'carsList',
  controller: 'CarsController',
  action: 'list',
  where: 'client'
});

Router.route('/cars/:_id', {
  name: 'editCar',
  controller: 'CarsController',
  action: 'edit',
  where: 'client'
});

Router.route('/mountains', {
  name: 'listMountains',
  controller: 'MountainsController',
  action: 'list',
  where: 'client'
});

Router.route('/mountains/create', {
  name: 'createMountain',
  controller: 'MountainsController',
  action: 'create',
  where: 'client'
});

Router.route('/mountains/:_id', {
  name: 'editMountain',
  controller: 'MountainsController',
  action: 'edit',
  where: 'client'
});