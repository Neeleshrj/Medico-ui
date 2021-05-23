export const selectDisease = (diseaseId) => {
    return {
        type: 'select_disease',
        payload: diseaseId
    };
}