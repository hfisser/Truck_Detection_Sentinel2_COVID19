// Detect trucks using Sentinel-2
// ------------------------------------------
// @Description 
// This script detects trucks in Sentinel-2 data. 
// It returns a binary layer where 1 indicates a truck.
// In order to see the result you have to zoom in, since the detected
// trucks are mostly represented as single pixels. Vectorization is needed for
// visualizing the results.
// @Author: Henrik Fisser, 2020
// @Note: No dedicated cloud masking is done in this script. 
// Use cloud-free acquisitions.
// @Parameters
// ------------------------------------------
min_rgb = 0.04
max_red = 0.15
max_green = 0.15
max_blue  = 0.4
max_ndvi = 0.7 // quite high to account for mixed pixels
max_ndwi = 0.001
max_ndsi = 0.0001
min_b11 = 0.05
max_b11 = 0.55
min_green_ratio = 0.05
min_red_ratio = 0.1
// ------------------------------------------

// Calculation
// mask to potential road areas first
ndvi_mask = ((B08 - B04) / (B08 + B04)) < max_ndvi
ndwi_mask = (B02 - B11) / (B02 + B11) < max_ndwi
ndsi_mask = ((B03 - B11) / (B03 + B11)) < max_ndsi
green_mask = B03 > min_rgb
blue_mask = B02 > min_rgb
red_mask = B04 > min_rgb
blue_mask_max = B02 < max_blue
green_mask_max = B03 < max_green
red_mask_max = B04 < max_red
b11_mask = ((B11 - B03) / (B11 + B03)) < max_b11
b11_mask_absolute = (B11 > min_b11) * (B11 < max_b11)
// create road mask
road_mask = green_mask *
  blue_mask * 
  red_mask * 
  blue_mask_max * 
  green_mask_max * 
  red_mask_max *
  b11_mask *
  b11_mask_absolute *
  ndvi_mask * 
  ndwi_mask *
  ndsi_mask

// calculate blue-green and blue-red ratio
blue_green = (B02 - B03) / (B02 + B03)
blue_red = (B02 - B04) / (B02 + B04)
// mask to roads and apply thresholds to ratios
bg_low = (blue_green * road_mask) > min_green_ratio
br_low = (blue_red * road_mask) > min_red_ratio
trucks = bg_low * br_low // trucks have value 1 in this binary layer
return [trucks];