import dotenv from 'dotenv';
import fs from 'fs';
import moment from 'moment';

dotenv.config()

const baseFolder = process.env.BASE_FOLDER;

// Creating the folder and writing the current timestamp into it
export const createFile = (req, res) => {

    const currentDateAndTime = moment().format('DD-MM-YYYY_hh-mm-ss a');
    const fileContent = `Current date: ${moment().format('DD-MM-YYYY')} \n Current time: ${moment().format('hh-mm-ss A')}`

    // Writing the file
    fs.writeFile(`./${baseFolder}/${currentDateAndTime}.txt`, fileContent, (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return res.status(500).json({
                status: 'Error',
                message: 'Error writing file!',
                data: {
                    error: err.message
                }
            });
        }

        res.status(201).json({
            status: 'Success',
            message: 'File created and content written!',
            data: {
                folder_name: baseFolder,
                file_name: currentDateAndTime
            }
        });
    });
};

// Getting all the files under the particular folder
export const getFiles = (req, res) => {

    //Reading the files from folder
    fs.readdir(`./${baseFolder}`, (err, files) => {
        if (err) {
            console.error('Error writing file:', err);
            return res.status(500).json({
                status: 'Error',
                message: 'Error retrieving file!',
                data: {
                    error: err.message
                }
            });
        }
        res.status(200).json({
            status: 'Success',
            message: 'Files successfully retrieved!',
            data: {
                files: files
            }
        });
    })

};
