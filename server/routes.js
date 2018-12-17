const ServicesControllerClass = require('./controllers/ServicesController');

module.exports = [
  {
    method: 'GET',
    path: '/api/services',
    handler: (req,h) => {
      const k = new ServicesControllerClass();
      return {
        list: k.index()
      }
    }
  },

  {
    method: 'GET',
    path: '/api/services/new',
    handler: (req,h) => {
      const k = new ServicesControllerClass();
      return k.new();
    }
  },

  {
    method: 'POST',
    path: '/api/services',
    handler: (req,h) => {
      const k = new ServicesControllerClass();
      return k.create(req.payload);
    }
  },

  {
    method: 'GET',
    path: '/api/services/{id}/edit',
    handler: (req,h) => {
      const k = new ServicesControllerClass();
      return k.show(req.params.id);
    }
  },

  {
    method: 'PATCH',
    path: '/api/services/{id}',
    handler: (req,h) => {
      const k = new ServicesControllerClass();
      return k.update(req.payload);
    }
  },

  {
    method: 'DELETE',
    path: '/api/services/{id}',
    handler: (req,h) => {
      const k = new ServicesControllerClass();
      return k.destroy(req.params.id);
    }
  }
];
