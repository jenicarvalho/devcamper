import Bootcamp from '../models/Bootcamp'

/**
 * @desc    Get all Bootcamps
 * @route   GET /api/v1/bootcamps
 * @access  Public
 */

export const getBootcamps = (req, res, next) => {
  console.log(req.body)
  res.status(200).json({ info: 'all' })
}

/**
 * @desc    Get single Bootcamp
 * @route   GET /api/v1/b∏ootcamps/:id
 * @access  Public
 */
export const getBootcamp = (req, res, next) => {
  res.status(200).json({ info: 'single' })
}

/**
 * @desc    Create new Bootcamp
 * @route   POST /api/v1/bootcamps
 * @access  Private
 */
export const createBootcamp = (req, res, next) => {
  res.status(200).json({ info: 'create' })
}

/**
 * @desc    Update Bootcamp
 * @route   PUT /api/v1/bootcamps/:id
 * @access  Private
 */
export const updateBootcamp = (req, res, next) => {
  res.status(200).json({ info: 'update' })
}

/**
 * @desc    Delete Bootcamp
 * @route   DELETE /api/v1/bootcamps/:id
 * @access  Private
 */
export const deleteBootcamp = (req, res, next) => {
  res.status(200).json({ info: 'delete' })
}
