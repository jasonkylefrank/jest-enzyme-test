
// Helper for Jest find() calls which target a data-testid attribute
export const findByTestIdAttr = (component, attr) => {
    return component.find(`[data-testid="${attr}"]`);
};