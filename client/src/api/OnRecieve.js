import ProtoMessageDecoder from "./ParseProto";

export function OnRecieve(response) {
    return ProtoMessageDecoder(response);    
}

export function getEventTimeStamp(response) {
    const data = OnRecieve(response);
    return data.header.timestamp;
}

function getEventStatusData(response) {
    const data = OnRecieve(response);
    return data.event.status;
}

export function getDetails(response) {
    const status = getEventStatusData(response);
    return status.details;
}

export function getNextTime(response) {
    const nextTime = getEventStatusData(response);
    return nextTime.nextTime;
}

export function getType(response) {
    const type = getEventStatusData(response);
    return type.type;
}

export function getCaption(response) {
    const caption = getEventStatusData(response);
    return caption.advStatus.caption;
}