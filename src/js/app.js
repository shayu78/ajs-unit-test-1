/* eslint-disable no-console */

export default function getHealthStatus(subjectInfo) {
  if (!(Object.prototype.hasOwnProperty.call(subjectInfo, 'health')
    && Number.isInteger(subjectInfo.health)
    && subjectInfo.health >= 1)) throw new Error('Неверные входные данные');
  if (subjectInfo.health < 15) return 'critical';
  if (subjectInfo.health > 50) return 'healthy';
  return 'wounded';
}

try {
  console.log(getHealthStatus({ name: 'Маг', health: 5 }));
  console.log(getHealthStatus({ name: 'Маг', health: 0 }));
} catch (error) {
  console.log(error);
}
