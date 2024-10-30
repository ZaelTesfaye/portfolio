"use server"

import {createClient} from "@/utils/supabase/server";
interface ListingData {
    [key: string]: any; // Define the structure of formData if known, or use this to accept any key-value pair
}
export const updateListing = async (formData: ListingData, id: number | string) => {

    const supabase = createClient();
    const { data, error } = await supabase
        .from('listing')
        .update({...formData, activeStatus: true })
        .eq('id', id)
        .select()

    if (error) return {status:false, message: "Error updating listing"};

    return  {status:true, message: "Listing updated successfully", data};
}