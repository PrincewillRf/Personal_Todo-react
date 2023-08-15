export const getFullYear = () => new Date().getFullYear();

export const getFooterCopy = (isIndex) => (isIndex ? "RF" : "RF main ");

export const getLatestNotification = () => {
    return "<strong>Urgent requirement</strong> - complete by RF"
}