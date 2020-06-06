import CheckActorType from '../closures/check-actor-type.js';

export default function (engine) {
    engine.closures.add("isVehicle", CheckActorType, { required: ['type'] });
}