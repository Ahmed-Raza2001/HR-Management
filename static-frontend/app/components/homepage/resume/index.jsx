'use client'


import React, { useState } from 'react';
import { Document } from 'react-pdf';
import { Box, Container, Heading, Button, Text, Flex, Icon, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, Center } from '@chakra-ui/react';
import { MdUpload } from "react-icons/md";

import ResumeTable from './resumetable';
import { getImageText, getPDFText, sendToOpenAI, uploadResume } from '@/app/api/resume';
import { useToast } from '@chakra-ui/react';

export function ResumeUpload({ sideBarWidth }) {
    const [resumeData, setResumeData] = useState(null);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [pdfText, setPdfText] = useState('');
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [btnLoading, setBtnLoading] = useState(false);
    const toast = useToast();



    const onFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const convertToText = async () => {
        console.log(1)
        if (file.type === 'application/pdf') {
            const pdfTextArray = [];
            console.log(2)
            for (let i = 1; i <= numPages; i++) {
                const pageText = await getPDFText(file, i);
                pdfTextArray.push(pageText);
            }
            console.log(3)


            const fullText = pdfTextArray.join('\n');
            setPdfText(fullText);

            // Send the converted text to the Azure OpenAI API
            // sendToOpenAI(fullText);
        } else if (file.type.startsWith('image/')) {
            const imageText = await getImageText(file);
            setPdfText(imageText);
            console.log(4)

            // Send the converted text to the Azure OpenAI API
            // sendToOpenAI(imageText);
        }
    };

    const handleSaveClick = async (resumeData, file) => {
        setLoading(true);

        try {
            // Call the uploadResume function to save the resume data and PDF file
            const response = await uploadResume({ resumeDetails: resumeData, pdf: file });

            setLoading(false);

            toast({
                title: "Resume saved sucessfully",
                status: "success",
                duration: 5000,
                position: "top-right",
                isClosable: true,
            });

            setResumeData(null);
            setPdfText('')
            setFile(null)
            // Navigate to the form page
            // navigate('/form'); // Replace '/form' with the actual path of your form page
        } catch (error) {
            setLoading(false);
            console.error("Error uploading resume:", error);
            // Handle the error appropriately
        }
    };
}
