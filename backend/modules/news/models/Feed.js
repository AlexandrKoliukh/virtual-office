import { Model } from 'objection';

export default class Feed extends Model {
  static get tableName() {
    return 'feeds';
  }

  $beforeInsert() {
    this.created_at = new Date().toISOString();
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['title', 'body'],
      properties: {
        id: { type: 'integer' },
        title: { type: 'string', minLength: 1, maxLength: 255 },
        body: { type: 'string', minLength: 1 },
        collectionId: { type: 'integer' },
        ownerId: { type: 'integer' },
        archive: { type: 'boolean' },
        created_at: { type: 'date-time' },
      },
    };
  }
}
