const employeeIds: (string | number)[] = [123, 'EMP01', 456, 'dev', 'MANAGER', 'emp02'];

function print(arr: (string | number)[]): void {
  arr.forEach((item) => {
    if (typeof item === 'string' && item === item.toUpperCase()) {
      console.log(item);
    }
  });
}

print(employeeIds);
