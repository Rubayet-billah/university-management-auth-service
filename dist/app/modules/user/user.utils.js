'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.generateUserId = void 0;
const user_model_1 = require('./user.model');
const generateUserId = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const lastUser = yield user_model_1.User.findOne(
      {},
      { id: 1, _id: 0 },
      { sort: { createdAt: -1 }, lean: true }
    );
    if (lastUser && lastUser.id) {
      const lastId = parseInt(lastUser.id, 10);
      const nextId = (lastId + 1).toString().padStart(5, '0');
      return nextId;
    }
    return '00001'; // Return '00001' as the default if no user is found
  });
exports.generateUserId = generateUserId;
