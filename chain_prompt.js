function toKebabCase(str) {
    // Step 1: Convert to lowercase
    let result = str.toLowerCase();
    
    // Step 2: Replace spaces, underscores, and periods with hyphens
    result = result.replace(/[ _.]/g, '-');
    
    // Step 3: Remove characters that are not letters, numbers, or hyphens
    result = result.replace(/[^a-z0-9-]/g, '');
    
    // Step 4: Collapse multiple hyphens and remove leading/trailing hyphens
    result = result.replace(/-+/g, '-').replace(/^-+|-+$/g, '');
    
    return result;
}