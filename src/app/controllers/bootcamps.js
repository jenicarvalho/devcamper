import Bootcamp from '../models/Bootcamp'
import ErrorResponse from '../utils/errorResponse'
/**
 * @desc    Get all Bootcamps
 * @route   GET /api/v1/bootcamps
 * @access  Public
 */

export const getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find()
    res.status(200).json({
      succes: true,
      count: bootcamps.length,
      data: bootcamps
    })
  } catch (error) {
    next(new ErrorResponse(error))
  }
}

/**
 * @desc    Get single Bootcamp
 * @route   GET /api/v1/b∏ootcamps/:id
 * @access  Public
 */
export const getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id)

    if (!bootcamp) {
      return next(new ErrorResponse(`Bootcamp not found width id of ${req.params.id}`, 404))
    }

    res.status(200).json({ succes: true, data: bootcamp })
  } catch (error) {
    next(new ErrorResponse(error))
  }
}

/**
 * @desc    Create new Bootcamp
 * @route   POST /api/v1/bootcamps
 * @access  Private
 */
export const createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body)

    res.status(201).json({
      succes: true,
      data: bootcamp
    })
  } catch (error) {
    next(new ErrorResponse(error))
  }
}

/**
 * @desc    Update Bootcamp
 * @route   PUT /api/v1/bootcamps/:id
 * @access  Private
 */
export const updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })


    if (!bootcamp) {
      return next(new ErrorResponse(`Bootcamp not found width id of ${req.params.id}`, 404))
    }

    res.status(200).json({ succes: true, data: bootcamp })
  } catch (error) {
    next(new ErrorResponse(error))
  }
}

/**
 * @desc    Delete Bootcamp
 * @route   DELETE /api/v1/bootcamps/:id
 * @access  Private
 */
export const deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id)

    if (!bootcamp) {
      return next(new ErrorResponse(`Bootcamp not found width id of ${req.params.id}`, 404))
    }

    res.status(200).json({ succes: true, data: {} })

  } catch (error) {
    next(new ErrorResponse(error))
  }
}
