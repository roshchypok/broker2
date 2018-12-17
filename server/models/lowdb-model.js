const db = require('./../db/init');
const pluralize = require('pluralize');

class LowdbModel {
  constructor(params) {
    this.attributes = {};
    this._useAttributes(this.defaultAttributes);
    if (params) this._useAttributes(params);
    this.destroyed = false;
    this.errors = [];
  }

  static get tableName () {
    return pluralize(this.name.toLowerCase());
  }

  get tableName () {
    return pluralize(this.constructor.name.toLowerCase());
  }

  static get table () {
    return db.get(this.tableName);
  }

  get table () {
    return db.get(this.tableName);
  }

  static get all () {
    try {
      return this.table;
    } catch (err) {
      return {error: err};
    }
   }

   static find (id) {
     try {
       const params = this.table.getById(id).value();
       return params ? new this(params) : null;
     } catch (err) {
       return {error: err};
     };
   }

   static create (params) {
     this.errors = [];
     try {
       this.table.insert(params).write();
       return true;
     } catch (err) {
       this.errors.push(err);
       return false;
     }
   }

   update (params) {
     this.errors = [];
     try {
       this._useAttributes(params);
       const attrs = this.table.updateById(this.id, this._attributesForTable).write();
       return true;
     } catch (err) {
       console.log(err);
       this.errors.push(err);
       return false;
     }
   }

   save () {
     this.errors = [];
     try {
       this.newRecord ? this.create() : this.table.updateById(this.id, this._attributesForTable).write();
       return true;
     } catch (err) {
       this.errors.push(err);
       return false;
     }
   }

   destroy (id) {
     this.errors = [];
     try {
       if (!this.newRecord) this.table.removeById(this.id).write();
       this.destroyed = true;
       return true;
     } catch (err) {
       this.errors.push(err);
       return false;
     }
   }

  get newRecord() {
    return !this.id || this.id === 'new' || this.id === 'new-record';
  }

  get id () {
    return this.attributes.id;
  }

  _useAttributes(params) {
    Object.assign(this.attributes, params);
  }

  get _attributesForTable() {
    const rez = Object.assign({}, this.attributes);
    delete rez.id;
    return rez;
  }
}

module.exports = LowdbModel;
