import ErrorResponse from '../utils/errorResponse'
import asyncHandler from '../middleware/async'
import Bootcamp from '../models/Bootcamp'

/**
 * @desc    Get all Bootcamps
 * @route   GET /api/v1/bootcamps
 * @access  Public
 */
export const getBootcamps = asyncHandler(async (req, res, next) => {
  const bootcamps = await Bootcamp.find();

  res
    .status(200)
    .json({ success: true, count: bootcamps.length, data: bootcamps });
});

/**
 * @desc    Get single Bootcamp
 * @route   GET /api/v1/b∏ootcamps/:id
 * @access  Public
 */
export const getBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findById(req.params.id);

  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: bootcamp });
});

/**
 * @desc    Create new Bootcamp
 * @route   POST /api/v1/bootcamps
 * @access  Private
 */
export const createBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);

  res.status(201).json({
    success: true,
    data: bootcamp
  });
});

/**
 * @desc    Update Bootcamp
 * @route   PUT /api/v1/bootcamps/:id
 * @access  Private
 */
export const updateBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: bootcamp });
});

/**
 * @desc    Delete Bootcamp
 * @route   DELETE /api/v1/bootcamps/:id
 * @access  Private
 */
export const deleteBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: {} });
});