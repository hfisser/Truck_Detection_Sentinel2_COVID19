# Truck Detection with Sentinel-2 during COVID19 crisis
This repository is designated to detecting trucks using Sentinel-2 data.

It was developed during the COVID-19 crisis in order to monitor the impact of the crisis.

The detection exploits the offset of different wavelengths reflected by moving objects. It targets pixels where blue is higher than green and red. First, a road mask is calculated and the data is masked to these pixels. The road mask is based on NDVI, NDWI, NDSI, B11-B03-ratio and absolute thresholds of B02, B03, B04 and B11. Second, the ratios between B02 (blue) and B03 (green) and B02 and B04 (red) are calculated:

_ test
_ test1

Finally, thresholds are applied to these ratios. 



![Method](https://github.com/hfisser/Truck_Detection_Sentinel2_COVID19/blob/master/method_neu.png)

Each truck is represented by one to three pixels with value 1 in the result. In order to visualize the results they may be vectorized, which this script does not do.

This is an example of detected trucks around Rotterdam, Netherlands. The results were vectorized.

![Trucks detected around Rotterdam](https://github.com/hfisser/Truck_Detection_Sentinel2_COVID19/blob/master/ts7_trucks.jpeg)
