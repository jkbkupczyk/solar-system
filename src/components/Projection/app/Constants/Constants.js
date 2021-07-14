/**
 * Provides bunch of mathematical and astronomical constants
 */
const DEGREES_TO_RADIANS_RATIO = 0.0174532925;
const RADIANS_TO_DEGREES_RATIO = 57.2957795;

class Constants {
    static get degreesToRadiansRatio() { return DEGREES_TO_RADIANS_RATIO; }
    static get radiansToDegreesRatio() { return RADIANS_TO_DEGREES_RATIO; }
}

export default Constants;