# Truck Detection with Sentinel-2 during COVID19 crisis
This repository is designated to detecting trucks using Sentinel-2 data.

It was developed during the COVID-19 crisis in order to monitor the impact of the crisis.

The detection exploits the offset of different wavelengths reflected by moving objects. It targets pixels where blue is higher than green and red. In the initial step, a road mask is calculated and the data is masked to these pixels. The road mask is based on NDVI, NDWI, NDSI, B11-B03-ratio and absolute thresholds of B02, B03, B04 and B11.

- minimum RGB = 0.04
- maximum B04 = 0.15
- maximum B03 = 0.15
- maximum B02 = 0.4
- maximum NDVI = 0.7
- maximum NDWI = 0.001
- maximum NDSI = 0.0001
- minimum B11 = 0.05
- maximum B11 = 0.55
&nbsp;(all must be True)

Afterwards, the ratios between B02 (blue) and B03 (green) and B02 and B04 (red) are calculated and the following thresholds are applied to these ratios:

- minimum B2-B03-ratio = 0.05
- minimum B02-B04-ratio = 0.1

![Method](https://github.com/hfisser/Truck_Detection_Sentinel2_COVID19/blob/master/method_neu.png)

Each truck is represented by one to three pixels with value 1 in the result. In order to visualize the results they may be vectorized, which this script does not do.

This is an example of detected trucks around Rotterdam, Netherlands. The results were vectorized.

![Trucks detected around Rotterdam](https://github.com/hfisser/Truck_Detection_Sentinel2_COVID19/blob/master/ts7_trucks.jpeg)
