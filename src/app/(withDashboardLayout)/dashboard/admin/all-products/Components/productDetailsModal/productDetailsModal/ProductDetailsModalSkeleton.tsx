import CustomModal from "@/components/customModal/CustomModal";
import { Box, Card, CardContent, Divider, Skeleton } from "@mui/material";

export default function ProductDetailsModalSkeleton({ open, setOpen }) {
  return (
    <CustomModal open={open} setOpen={setOpen} closeBtn={false}>
      <Box className="p-6 bg-gray-100 min-w-[400px] flex justify-center">
        <Card className="w-full max-w-4xl p-6 shadow-lg rounded-2xl">
          {/* Skeleton for Image */}
          <Box className="flex justify-center mb-6">
            <Skeleton
              variant="rectangular"
              width={200}
              height={200}
              className="rounded-lg"
            />
          </Box>

          {/* Skeleton for Product Information */}
          <CardContent>
            <Skeleton variant="text" width={180} height={32} />
            <Skeleton variant="text" width={150} height={24} className="mt-2" />
            <Skeleton variant="text" width={180} height={24} className="mt-1" />

            <Box className="mt-4">
              <Skeleton variant="text" width={120} height={28} />
              <Skeleton
                variant="rectangular"
                width={180}
                height={32}
                className="mt-2"
              />
            </Box>

            <Box className="mt-4 flex gap-4">
              <Skeleton variant="rectangular" width={100} height={32} />
              <Skeleton variant="rectangular" width={100} height={32} />
            </Box>

            <Divider className="my-6" />

            <Box className="bg-green-50 p-4 rounded-lg">
              <Skeleton variant="text" width={150} height={24} />
              <Skeleton
                variant="text"
                width={200}
                height={20}
                className="mt-1"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </CustomModal>
  );
}
