"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employeeIds = [123, 'EMP01', 456, 'dev', 'MANAGER', 'emp02'];
function print(arr) {
    arr.forEach((item) => {
        if (typeof item === 'string' && item === item.toUpperCase()) {
            console.log(item);
        }
    });
}
print(employeeIds);
//# sourceMappingURL=main.js.map