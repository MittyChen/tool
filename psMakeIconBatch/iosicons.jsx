//调用[File]的[openDialog]命令，弹出文件选择窗口，提示用户选择1024*1024尺寸的图标，并将文件存储在变量[bigIcon]中。
var bigIcon = File.openDialog("请选择一张1024x1024大小的图片：", "*.png", false);

//打开用户选择的图标文件，并将打开后的文档，赋予变量[pngDoc]。
var pngDoc = open(bigIcon, OpenDocumentType.PNG);

//调用[Folder]的[selectDialog]命令，弹出文件夹选择窗口，提示用户选择输出iOS图标的文件夹。
//并将文件夹存储在变量[destFolder]中。
var destFolder = Folder.selectDialog( "请选择一个输出的文件夹：");

//定义一个数组，这个数组由各种js对象组成，每个对象都有一个[name]属性和[size]属性，分别表示图标的名称的尺寸。

//common name
// var icons =
// [ 
//   {"name": "iTunesArtwork", "size":36.12}, 
//   {"name": "Icon-29", "size":1.02}, 
//   {"name": "Icon-29@2x",  "size":2.05},
//   {"name": "Icon-40", "size":1.41},  
//   {"name": "Icon-40@2x",  "size":2.82}, 
//   {"name": "Icon-40@3x",  "size":4.23},  
//   {"name": "Icon-50", "size":1.76},  
//   {"name": "Icon-50@2x",  "size":3.53}, 
//   {"name": "Icon57",  "size":2.01}, 
//   {"name": "Icon57@2x", "size":4.02}, 
//   {"name": "Icon-72", "size":2.54}, 
//   {"name": "Icon-72@2x",  "size":5.08},  
//   {"name": "Icon-76",   "size":2.68},  
//   {"name": "Icon-76@2x",  "size":5.36},
//   {"name": "Icon-100",  "size":3.53}
//   ];


//knituma
// var icons =
// [ 
//   {"name": "iTunesArtwork", "size":36.12}, 
//   {"name": "AppIcon29x29-1", "size":1.02}, 
//   {"name": "AppIcon29x29-1@2x",  "size":2.05},
//   {"name": "AppIcon29x29",  "size":1.02},
//   {"name": "AppIcon29x29@2x",  "size":2.05},
//   {"name": "AppIcon29x29@3x",  "size":3.07},
//   {"name": "AppIcon40x40", "size":1.41},  
//   {"name": "AppIcon40x40-1@2x",  "size":2.82}, 
//   {"name": "AppIcon40x40@2x",  "size":2.82}, 
//   {"name": "AppIcon40x40@3x",  "size":4.23},
//   {"name": "AppIcon60x60@2x",  "size":4.23},
//   {"name": "AppIcon60x60@3x",  "size":6.35},
//   {"name": "AppIcon50x50", "size":1.76},  
//   {"name": "AppIcon50x50@2x",  "size":3.53}, 
//   {"name": "AppIcon57x57",  "size":2.01}, 
//   {"name": "AppIcon57x57@2x", "size":4.02},
//   {"name": "AppIcon72x72", "size":2.54}, 
//   {"name": "AppIcon72x72@2x",  "size":5.08},  
//   {"name": "AppIcon76x76",   "size":2.68},  
//   {"name": "AppIcon76x76@2x",  "size":5.36}
//   ];

//loh

// var icons =
// [ 
//   {"name": "Icon-29",  "size":1.02},
//   {"name": "Icon-29-1",  "size":1.02},
//   {"name": "Icon-29@2x",  "size":2.05},
//   {"name": "Icon-29@2x-1",  "size":2.05},
//   {"name": "Icon-29@3x",  "size":3.07},
//   {"name": "Icon-40", "size":1.41},
//   {"name": "Icon-40@2x",  "size":2.82}, 
//   {"name": "Icon-40@2x-1",  "size":2.82},
//   {"name": "Icon-40@3x",  "size":4.23},
//   {"name": "Icon-60@2x",  "size":4.23},
//   {"name": "Icon-60@3x",  "size":6.35},
//   {"name": "Icon-50", "size":1.76},  
//   {"name": "Icon-50@2x",  "size":3.53}, 
//   {"name": "Icon-57",  "size":2.01}, 
//   {"name": "Icon-57@2x", "size":4.02},
//   {"name": "Icon-72", "size":2.54}, 
//   {"name": "Icon-72@2x",  "size":5.08},  
//   {"name": "Icon-76",   "size":2.68},  
//   {"name": "Icon-76@2x",  "size":5.36}
//   ];


//奇葩三国 ios

// var icons =
// [ 
//   {"name": "Icon-Small-1",  "size":1.02},
//   {"name": "Icon-Small",  "size":1.02},
//   {"name": "Icon-Small@2x-1",  "size":2.05},
//   {"name": "Icon-Small@2x",  "size":2.05},
//   {"name": "Icon-29@3x",  "size":3.07},
//   {"name": "Icon-40", "size":1.41},
//   {"name": "Icon-40@2x",  "size":2.82}, 
//   {"name": "Icon-40@2x-1",  "size":2.82},
//   {"name": "Icon-60@2x",  "size":4.23},
//   {"name": "Icon-60@3x",  "size":6.35},
//   {"name": "Icon-Small-50", "size":1.76},  
//   {"name": "Icon-Small-50@2x",  "size":3.53}, 
//   {"name": "Icon",  "size":2.01}, 
//   {"name": "Icon@2x", "size":4.02},
//   {"name": "Icon-72", "size":2.54}, 
//   {"name": "Icon-72@2x",  "size":5.08},  
//   {"name": "Icon-76",   "size":2.68},  
//   {"name": "Icon-76@2x",  "size":5.36}
//   ];

// cocos size表示的尺寸 厘米 cm


// var icons =
// [ 
//   {"name": "iTunesArtwork", "size":36.12}, 
//   {"name": "Icon-29", "size":1.02}, 
//   {"name": "Icon-58",  "size":2.05},
//   {"name": "Icon-40", "size":1.41},  
//   {"name": "Icon-80",  "size":2.82}, 
//   {"name": "Icon-120",  "size":4.23},  
//   {"name": "Icon-50", "size":1.76},  
//   {"name": "Icon-100",  "size":3.53}, 
//   {"name": "Icon-57",  "size":2.01}, 
//   {"name": "Icon-114", "size":4.02}, 
//   {"name": "Icon-72", "size":2.54}, 
//   {"name": "Icon-144",  "size":5.08},  
//   {"name": "Icon-76",   "size":2.68},  
//   {"name": "Icon-152",  "size":5.36},
//   {"name": "Icon-100",  "size":3.53}
//   ];



// cocos size表示的尺寸 厘米 cm android

var icons =
[ 
  {"name": "iconl", "size":1.13}, 
  {"name": "iconm", "size":1.69}, 
  {"name": "iconh", "size":2.54},
  {"name": "iconxh", "size":3.39},
  {"name": "iconxxh", "size":5.08}
];

//定义一个变量[option]，表示iOS输出的格式为PNG。并设置输出PNG时不执行PNG8压缩，以保证图标质量。
var option = new PNGSaveOptions();

//保存当前的历史状态，以方便缩放图片后，再返回至最初状态的尺寸。
option.PNG8 = false;
var startState = pngDoc.historyStates[0];

//添加一个循环语句，用来遍历所有图标对象的数组。
for (var i = 0; i < icons.length; i++) 
{
	//定义一个变量[icon]，表示当前遍历到的图标对象。
	var icon = icons[i];

	//调用[pngDoc]对象的[resizeImage]方法，将原图标，缩小到当前遍历到的图标对象定义的尺寸。
	pngDoc.resizeImage(icon.size, icon.size);

	//定义一个变量[destFileName]，表示要导出的图标的名称。
	var destFileName = icon.name + ".png";

	if (icon.name == "iTunesArtwork")
        destFileName = icon.name;
    
      //定义一个变量[file]，表示图标输出的路径。
  var file = new File(destFolder + "/" + destFileName);

	//调用[pngDoc]的[saveAs]方法，将缩小尺寸后的图标导出到指定路径。
	pngDoc.saveAs(file, option, true, Extension.LOWERCASE);

	//将[doc]对象的历史状态，恢复到尺寸缩放之前的状态，即恢复到1024*1024尺寸，为下次缩小尺寸做准备。
	pngDoc.activeHistoryState = startState;
}

//操作完成后，关闭文档。
pngDoc.close(SaveOptions.DONOTSAVECHANGES);