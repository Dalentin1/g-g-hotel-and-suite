// Local
const secret = "SUPER SECERT";
// Exported
const john = "john";
const peter = "peter";

console.log(module)

// so what we're going to do here is share the two variables "john and peter"
// the other variable would be a local variable to this file the other two would be exported
// the module is an object in node and exports is also an object in module see syntax below on how to work with these objects

module.exports = { john, peter }

// we passed the two variables as properties to the object exports
// we can now access the variables from any file
// N.B modules could be exported as objects or functions